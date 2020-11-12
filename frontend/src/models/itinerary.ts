import { ItineraryItemProps } from './itinerary-item';

export interface ItineraryProps {
  id: string; // Pk
  userId: string; // ForeignKey
  itineraryItems: ItineraryItemProps[];
}

class Itinerary implements ItineraryProps {
  constructor(
    public id: string,
    public userId: string,
    public itineraryItems: ItineraryItemProps[]
  ) {}
}

export default Itinerary;
