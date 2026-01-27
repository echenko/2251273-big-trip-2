const DESTINATION_POINTS = [
  {
    'id': 'd519dd4f-8442-42cd-adbe-d0644e341604',
    'description': 'Carleone',
    'name': 'Carleone',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': '321e336f-c64d-4671-82a2-20b1cec20d5f',
    'description': 'Laencaster',
    'name': 'Laencaster',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': '919d787e-9728-43f6-b3d7-1c7149148d37',
    'description': 'Islesbury',
    'name': 'Islesbury',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 'af9bdb03-b807-4f6e-92a5-999ec0779776',
    'description': 'Westray',
    'name': 'Westray',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': '8e9d5c7c-a52d-4aca-966f-29bc3aa3d3a7',
    'description': 'Archensheen',
    'name': 'Archensheen',
    'pictures': []
  },
  {
    'id': 'b5308537-e234-4901-8661-fa0027d0b23f',
    'description': 'Ruthorham',
    'name': 'Ruthorham',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': '84e5879f-d376-4cb4-aabe-f40f02215d82',
    'description': 'Bamborourgh',
    'name': 'Bamborourgh',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': '6c84adcd-9a22-4af2-a783-20d18a24c68b',
    'description': 'Pirn',
    'name': 'Pirn',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': '217faae6-5786-4144-9023-f5c60292f9c3',
    'description': 'Leeside',
    'name': 'Leeside',
    'pictures': []
  }
];

function getAllDestinationPoints() {
  return DESTINATION_POINTS;
}

function getDestinationPointById(id) {
  return DESTINATION_POINTS.find((point) => point.id === id);
}

export {DESTINATION_POINTS, getAllDestinationPoints, getDestinationPointById};
