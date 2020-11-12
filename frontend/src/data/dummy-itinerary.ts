import Itinerary from '../models/itinerary';
import ItineraryItem, { Category } from '../models/itinerary-item';

const itinerary = [
  new Itinerary('1', '1', [
    new ItineraryItem(
      'Sydney Opera House',
      Category.ATTRACTION,
      false,
      ['landmark'],
      {
        start: new Date('2020-12-17T10:24:00'),
        end: new Date('2020-12-17T12:24:00')
      },
      { latitude: -33.855983, longitude: 151.215383 }
    ),
    new ItineraryItem(
      'Museum of Sydney',
      Category.ATTRACTION,
      false,
      ['museum'],
      {
        start: new Date('2020-12-17T13:24:00'),
        end: new Date('2020-12-17T15:24:00')
      },
      { latitude: -33.8636, longitude: 151.2114 }
    ),
    new ItineraryItem(
      'Royal Botanic Gardens',
      Category.ATTRACTION,
      false,
      ['garden'],
      {
        start: new Date('2020-12-17T16:24:00'),
        end: new Date('2020-12-17T18:24:00')
      },
      { latitude: -33.8642, longitude: 151.2166 }
    )
  ])
];

export default itinerary;
