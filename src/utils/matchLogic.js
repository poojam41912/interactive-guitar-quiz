export default function getGuitarMatch(answers) {
  // simple matching logic (can be improved)
  const index = answers.findIndex((a) =>
    ['Vintage', 'Warm & Rich', 'Blues'].includes(a)
  )

  if (index === 0) {
    return {
      name: 'Fender Stratocaster',
      image: 'fender-strat.jpg',
      description: 'A classic electric guitar known for its bright, clean tone.'
    }
  } else if (index === 1) {
    return {
      name: 'Yamaha F310',
      image: 'yamaha-f310.jpg',
      description: 'A versatile acoustic guitar perfect for beginners.'
    }
  } else if (index === 2) {
    return {
      name: 'Gibson Vintage',
      image: 'gibson-vintage.jpg',
      description: 'A soulful guitar with rich vintage tone.'
    }
  } else {
    return {
      name: 'Cort AD810',
      image: 'cort-ad810.jpg',
      description: 'An all-rounder guitar with balanced tone and comfort.'
    }
  }
}
