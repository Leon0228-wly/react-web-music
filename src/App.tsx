import React,{ Suspense,useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import TableTest from './test'
import ButtonTest from './button-test'
import { setupCloudscapeTheme } from './theming';

setupCloudscapeTheme();

function App() {
  return (
    <div>
      <TableTest/>
      <ButtonTest/>
    </div>
  );
}

export default App;
