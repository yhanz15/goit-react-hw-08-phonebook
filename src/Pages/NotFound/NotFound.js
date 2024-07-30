import {
  Container,
  Text,
  List,
  ListItem,
  StyledLink,
  Wrapper,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <main>
      <Container>
        <Wrapper>
          <List>
            <ListItem>
              <StyledLink to="/">Home</StyledLink>
            </ListItem>
          </List>

          <Text>
            WELCOME!!
            <span>To Yhanz Phonebook </span>
          </Text>
        </Wrapper>
      </Container>
    </main>
  );
};

export default NotFound;
