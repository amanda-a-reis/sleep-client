import React from 'react';
import {
  FormControl,
  Grid,
  GridItem,
  Box,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import Graphic from './components/Graphic/Graphic';
import TableSleep from './components/Table/TableSleep';
import Logout from './components/logout/Logout';
import Form from './components/form/Form'
import Filter from './components/filter/Filter';

function App() {
  const name = JSON.parse(localStorage.getItem('name'))
  const [isSmallerThan] = useMediaQuery('(max-width: 1030px)')
  const [mediaQueriaMobile] = useMediaQuery('(max-width: 560px)')
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
          <GridItem pl='2' bg='orange.300' area={'header'} display='flex' flexDirection='row-reverse' justifyContent={isSmallerThan ? 'center' : 'space-between'} alignItems='center'>
            <Logout />
            <Text ml={25} color='white' mr={isSmallerThan ? '10px' : '0'} textAlign='center'>Seja bem-vindo(a) {name}</Text>

          </GridItem>
          <GridItem w='90vw' h='90vh'>
            <Box>
              <Filter />
            </Box>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
              <Form />
            </Box>
            <Box display='flex' alignItems='center' flexDirection={isSmallerThan ? 'column' : 'row'}>
              <GridItem pl='2' area={'main'} h={mediaQueriaMobile ? '50vh' : '50vh'} w={mediaQueriaMobile ? '100vw' : '60vw'} mt={isSmallerThan ? '50px' : '100px'} ml={isSmallerThan ? '10px' : '0'}>
                <Graphic />
              </GridItem>
              <GridItem h='50vh' w={mediaQueriaMobile ? '80vw' : '50vw'} mt={mediaQueriaMobile ? '0' : '150px'}>
                <TableSleep />
              </GridItem>
            </Box>
          </GridItem>
        </Grid>
      </FormControl>
  );
}

export default App;
