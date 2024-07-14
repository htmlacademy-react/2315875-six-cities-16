type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type Review = [{
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}]


const ReviewsProps : Review = [{
  'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
  'date': '2019-05-08T14:13:56.569Z',
  'user': {
    'name': 'Oliver Conner',
    'avatarUrl': 'https://url-to-image/image.png',
    'isPro': false
  },
  'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'rating': 4
}];

export { ReviewsProps };
