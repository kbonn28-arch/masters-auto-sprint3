const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      process.env.CLIENT_URL
    ].filter(Boolean),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let quoteRequests = [];
let appointments = [];
let maintenanceSubscriptions = [];

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Email send error:', error);
  }
};

app.get('/', (req, res) => {
  res.json({ message: 'Masters Auto backend is running' });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    ok: true,
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/quotes', (req, res) => {
  res.json(quoteRequests);
});

app.post('/api/quotes', async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      vehicleSize,
      serviceType,
      preferredDate,
      message
    } = req.body;

    if (!name || !phone || !email || !vehicleSize || !serviceType) {
      return res.status(400).json({
        success: false,
        message: 'Please fill out all required fields.'
      });
    }

    const quoteData = {
      id: Date.now(),
      name,
      phone,
      email,
      vehicleSize,
      serviceType,
      preferredDate: preferredDate || 'Not provided',
      message: message || 'No message provided',
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    };

    quoteRequests.push(quoteData);

    const businessMailOptions = {
      from: `"Masters Auto Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: "New Quote Request - Master's Auto Detail",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${quoteData.name}</p>
        <p><strong>Phone:</strong> ${quoteData.phone}</p>
        <p><strong>Email:</strong> ${quoteData.email}</p>
        <p><strong>Vehicle Size:</strong> ${quoteData.vehicleSize}</p>
        <p><strong>Service Type:</strong> ${quoteData.serviceType}</p>
        <p><strong>Preferred Date:</strong> ${quoteData.preferredDate}</p>
        <p><strong>Message:</strong> ${quoteData.message}</p>
        <p><strong>Submitted:</strong> ${quoteData.date}</p>
      `
    };

    const customerMailOptions = {
      from: `"Masters Auto" <${process.env.MAIL_USER}>`,
      to: quoteData.email,
      subject: 'Quote Request Received - Master’s Auto Detail',
      html: `
        <h2>Thank You for Your Quote Request!</h2>
        <p>Hi ${quoteData.name},</p>
        <p>We received your quote request for <strong>${quoteData.serviceType}</strong> on your <strong>${quoteData.vehicleSize}</strong> vehicle.</p>
        <p>Our team will review your request and contact you shortly with pricing and appointment availability.</p>
        <p>If you have any questions, call us at <strong>(530) 321-2936</strong>.</p>
        <p>Best regards,<br />Master’s Auto Detail</p>
      `
    };

    await Promise.all([
      sendEmail(businessMailOptions),
      sendEmail(customerMailOptions)
    ]);

    res.json({
      success: true,
      message: 'Quote request submitted successfully.'
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit quote request.'
    });
  }
});

app.put('/api/quotes/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const quoteIndex = quoteRequests.findIndex((quote) => quote.id == id);

  if (quoteIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Quote not found.'
    });
  }

  quoteRequests[quoteIndex].status = status;

  res.json({
    success: true,
    quote: quoteRequests[quoteIndex]
  });
});

app.delete('/api/quotes/:id', (req, res) => {
  const { id } = req.params;
  quoteRequests = quoteRequests.filter((quote) => quote.id != id);

  res.json({ success: true });
});

app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

app.post('/api/appointments', (req, res) => {
  const appointment = {
    ...req.body,
    id: Date.now(),
    createdAt: new Date().toISOString()
  };

  appointments.push(appointment);

  res.json({
    success: true,
    appointment
  });
});

app.get('/api/services', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Basic Detail',
      description: 'Exterior wash, interior cleaning, wax',
      price: 195
    },
    {
      id: 2,
      name: 'Full Detail',
      description: 'Complete restoration with paint correction',
      price: 395
    },
    {
      id: 3,
      name: 'Ceramic Coating',
      description: 'Long-term ceramic protection',
      price: 500
    },
    {
      id: 4,
      name: 'Headlight Restoration',
      description: 'Restore headlight clarity',
      price: 26
    },
    {
      id: 5,
      name: 'Spot Cleaning',
      description: 'Target specific stains',
      price: 35
    },
    {
      id: 6,
      name: 'Deep Shampoo Cleaning',
      description: 'Deep clean carpets and upholstery',
      price: 100
    }
  ]);
});

app.get('/api/pricing', (req, res) => {
  res.json([
    { size: 'Extra Small', basicPrice: 159, fullPrice: 359 },
    { size: 'Small', basicPrice: 195, fullPrice: 395 },
    { size: 'Medium', basicPrice: 249, fullPrice: 449 },
    { size: 'Large', basicPrice: 339, fullPrice: 539 },
    { size: 'Extra Large', basicPrice: 429, fullPrice: 629 }
  ]);
});

app.get('/api/maintenance-plans', (req, res) => {
  res.json([
    {
      id: 'basic',
      name: 'Basic Care',
      price: 39,
      period: 'month',
      description: 'Perfect for regular maintenance',
      features: [
        'Monthly exterior wash',
        'Interior vacuum and wipe down',
        'Tire dressing',
        'Window cleaning',
        '10% off additional services'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Care',
      price: 79,
      period: 'month',
      description: 'Most popular for vehicle enthusiasts',
      features: [
        'Bi-weekly exterior wash',
        'Weekly interior cleaning',
        'Monthly wax application',
        'Ceramic coating maintenance',
        'Priority scheduling',
        '20% off all services',
        'Free headlight restoration annually'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Care',
      price: 129,
      period: 'month',
      description: 'Ultimate protection and care',
      features: [
        'Weekly full detail',
        'Unlimited exterior washes',
        'Full ceramic coating system',
        'Paint correction quarterly',
        'Leather conditioning monthly',
        'Emergency spill cleanup',
        '30% off all services',
        'Free annual ceramic upgrade'
      ],
      popular: false
    }
  ]);
});

app.post('/api/maintenance-subscription', async (req, res) => {
  try {
    const { name, email, phone, plan, vehicleInfo } = req.body;

    if (!name || !email || !phone || !plan) {
      return res.status(400).json({
        success: false,
        message: 'Please fill out all required fields.'
      });
    }

    const subscriptionData = {
      id: Date.now(),
      name,
      email,
      phone,
      plan,
      vehicleInfo: vehicleInfo || 'Not provided',
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    };

    maintenanceSubscriptions.push(subscriptionData);

    const businessMailOptions = {
      from: `"Masters Auto Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: "New Maintenance Club Subscription - Master's Auto Detail",
      html: `
        <h2>New Maintenance Club Subscription</h2>
        <p><strong>Name:</strong> ${subscriptionData.name}</p>
        <p><strong>Email:</strong> ${subscriptionData.email}</p>
        <p><strong>Phone:</strong> ${subscriptionData.phone}</p>
        <p><strong>Plan:</strong> ${subscriptionData.plan}</p>
        <p><strong>Vehicle Info:</strong> ${subscriptionData.vehicleInfo}</p>
        <p><strong>Submitted:</strong> ${subscriptionData.date}</p>
      `
    };

    const customerMailOptions = {
      from: `"Masters Auto" <${process.env.MAIL_USER}>`,
      to: subscriptionData.email,
      subject: "Welcome to Master's Maintenance Club!",
      html: `
        <h2>Welcome to Master's Maintenance Club!</h2>
        <p>Hi ${subscriptionData.name},</p>
        <p>Thank you for joining our Maintenance Club with the <strong>${subscriptionData.plan}</strong> plan.</p>
        <p>Our team will contact you within 24 hours to complete your membership setup and schedule your first service.</p>
        <p>If you have any questions, call us at <strong>(530) 321-2936</strong>.</p>
        <p>Best regards,<br />Master’s Auto Detail</p>
      `
    };

    await Promise.all([
      sendEmail(businessMailOptions),
      sendEmail(customerMailOptions)
    ]);

    res.json({
      success: true,
      message: 'Subscription submitted successfully.'
    });
  } catch (error) {
    console.error('Maintenance subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit subscription.'
    });
  }
});

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'masters2024') {
    return res.json({
      success: true,
      token: 'demo-token'
    });
  }

  res.status(401).json({
    success: false,
    message: 'Invalid credentials'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});