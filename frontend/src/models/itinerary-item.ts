// import moment from 'moment';

export enum Category {
  ACCOMMODATION,
  ATTRACTION,
  FLIGHT,
  RESTAURANT,
  OTHER
}

// const Tags = new Set('hike', 'beach'); // Add more

export interface ItineraryItemProps {
  name: string;
  category: Category;
  isFavourited: boolean;
  tags: string[]; // Could improve (has to be set of Tags)
  visitPeriod: { start: Date; end: Date };
  location: {
    latitude: number;
    longitude: number;
  };
}

class ItineraryItem implements ItineraryItemProps {
  constructor(
    public name: string,
    public category: Category,
    public isFavourited: boolean,
    public tags: string[], // Could improve (has to be set of Tags)
    public visitPeriod: { start: Date; end: Date },
    public location: { latitude: number; longitude: number }
  ) {}
}

export default ItineraryItem;
