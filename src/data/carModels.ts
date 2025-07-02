export interface CarModel {
  id: string;
  name: string;
  topSpeed: string;
  horsepower: string;
  price: string;
  acceleration: string;
  description: string;
  image: string;
}

export const carModels: CarModel[] = [
  {
    id: 'chiron',
    name: 'Chiron',
    topSpeed: '261 mph',
    horsepower: '1,479 HP',
    price: '$3.26M',
    acceleration: '2.4s',
    description: 'The ultimate expression of automotive excellence, combining unmatched performance with luxurious craftsmanship.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'chiron-sport',
    name: 'Chiron Sport',
    topSpeed: '261 mph',
    horsepower: '1,479 HP',
    price: '$3.65M',
    acceleration: '2.3s',
    description: 'Enhanced agility and precision for the most demanding driving experiences.',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'chiron-super-sport',
    name: 'Chiron Super Sport',
    topSpeed: '273 mph',
    horsepower: '1,578 HP',
    price: '$3.9M',
    acceleration: '2.4s',
    description: 'The fastest production Bugatti ever created, pushing the boundaries of speed.',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'la-voiture-noire',
    name: 'La Voiture Noire',
    topSpeed: '261 mph',
    horsepower: '1,479 HP',
    price: '$18.7M',
    acceleration: '2.4s',
    description: 'The most exclusive hypercar ever created, a unique tribute to Bugatti heritage.',
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'divo',
    name: 'Divo',
    topSpeed: '236 mph',
    horsepower: '1,479 HP',
    price: '$5.8M',
    acceleration: '2.4s',
    description: 'Track-focused aerodynamic masterpiece designed for ultimate cornering performance.',
    image: 'https://images.pexels.com/photos/159293/car-engine-motor-clean-159293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'bolide',
    name: 'Bolide',
    topSpeed: '310 mph',
    horsepower: '1,825 HP',
    price: '$4.7M',
    acceleration: '2.17s',
    description: 'The ultimate track weapon, showcasing Bugatti engineering at its most extreme.',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  }
];