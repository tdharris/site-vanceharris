export default {

  name: 'Dr. Vance Harris, M.D.',
  tagline: 'Family practice physician in Redding, California',
  address: {
    line1: '2632 Edith Ave, Suite B',
    line2: 'Redding, CA 96001',
    image: '/img/location-map.jpg',
    url: 'https://www.google.com/maps/place/2632+Edith+Ave+b,+Redding,+CA+96001/@40.571222,-122.4010157,17z/data=!3m1!4b1!4m5!3m4!1s0x54d2ecf7ce99c0df:0x1d14b397d3c2a957!8m2!3d40.571222!4d-122.398827'
  },
  phone: {
    pretty: '(530) 242-1227',
    url: 'tel:5302421227'
  },
  download: {
    title: 'New Patient Forms',
    url: '/forms/Intake.pdf'
  },
  hours: {
    title: 'Hours of Operation',
    days: [{
      dayRange: 'Monday - Thursday',
      timeRange: '8:00 - 5:00'
    }, {
      dayRange: 'Friday',
      timeRange: '8:00 - 1:00',
      note: 'The office is closed between 1:00 and 2:00'
    }]
  }

}
