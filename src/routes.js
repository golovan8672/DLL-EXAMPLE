import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { inject, observer, Provider } from 'mobx-react';
import page1Store from './stores/Page1Store';
import page2Store from './stores/Page2Store';
import { makeObservable, observable, action } from 'mobx';

// DEFAULT 5800 ms
import map from '2gis-maps' //+ 2500ms

// ALL MUI + 8000ms
import {Button} from '@mui/material' 
import {AbcOutlined} from '@mui/icons-material'
import TreeView from '@mui/lab/TreeView'; 
import {styled} from '@mui/material/styles'; 
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

// // ALL PLATE 12000ms
// import {usePlateEditorState} from '@udecode/plate-core'; 
// import {Plate as UdecodePlate} from '@udecode/plate';

import {EditorState} from 'draft-js'; // + 3000ms
// const PNF = require('google-libphonenumber').PhoneNumberFormat; // + 2000ms
// import {Layer, Group, Text, Rect} from 'react-konva'; //+ 2000ms


// import {Document, Page} from 'react-pdf'; // + 2000ms 
// import juice from 'juice' // + 2000ms;

const StyledTreeView = styled(TreeView)(({theme}) => {
  return {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '.25px',
    maxHeight: '596px',
    overflowY: 'auto',
    margin: '16px 0 2px 0'
  };
});

const Page1 = inject('page1Store')(observer(({ page1Store }) => (
  <div>
    <h2>Page 1</h2>
    <p>{page1Store.data}</p>
    <button onClick={() => page1Store.setData('Updated data for Page 1')}>Update Data</button>
  </div>
)));

const Page2 = inject('page2Store')(observer(({ page2Store }) => (
  <div>
    <Button />
    <AbcOutlined />
    <StyledTreeView />
    <EditorState />
    <h2>Page 2</h2>
    <p>{page2Store.data}</p>
    <button onClick={() => page2Store.setData('Updated data for Page 2')}>Update Data</button>
  </div>
)));

const App = () => (
    <Provider page1Store={page1Store} page2Store={page2Store}>
      <Router>
      <div>
      <nav>
        <ul>
          <li><Link to="/">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
        </ul>
      </nav>

      <Route path="/" exact component={Page1} />
      <Route path="/page2" component={Page2} />
    </div>
      </Router>
    </Provider>
);

export default App;
