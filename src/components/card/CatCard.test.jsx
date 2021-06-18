import { render } from '@testing-library/react';
import {CatCard} from './CatCard';
const cats=[
    
        {
          "id": 7,
          "name": "Oliver",
          "birthdate": "2018-10-02",
          "owner name": "Liz Drumm",
          "thumbnailUrl": "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
          "viewscount": 0
        },
]
test('The catCard component renders', () => {
    render(<CatCard cat={cats} />)
  })