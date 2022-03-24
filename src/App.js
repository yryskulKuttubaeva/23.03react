import Image from './components/Image/Image';
import Paragraph from './components/Paragraph/Paragraph';

import koalaImage from './assets/koala.jpg';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Alert success>This is a sample alert</Alert>
      <Alert danger>This is a sample alert</Alert>
      <Image align="left" url={koalaImage} width="150px" height="100px" />
      <Image align="right" url="https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg" width="150px" height="100px" />
      <Paragraph size="14px">This is sample paragraph</Paragraph>
      <Paragraph color="red">This is small paragraph</Paragraph>
    </div>
  );
}

export default App;
