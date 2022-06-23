import React from 'react';
import {
  FormControl,
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react';
import Graphic from './components/Graphic/Graphic';
import TableSleep from './components/Table/TableSleep';
import Logout from './components/logout/Logout';
import Form from './components/form/Form'

function App() {

  return (
      <FormControl variant='floating'>

        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h='200px'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='orange.300' area={'header'} display='flex' flexDirection='row-reverse'>
            <Logout />
          </GridItem>
          <GridItem w='90vw' h='90vh'>
            <Box display='flex' justifyContent='center'>
              <Form />
            </Box>
            <Box display='flex' alignItems='center'>
              <GridItem pl='2' area={'main'} h='50vh' w='60vw' mt={100}>
                <Graphic />
              </GridItem>
              <GridItem h='50vh' w='50vw' mt={150}>
                <TableSleep />
              </GridItem>
            </Box>
          </GridItem>
        </Grid>
      </FormControl>
  );
}

export default App;
