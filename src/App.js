import React from 'react'

import  file  from './files/workflow.asl.json'

import AWSSfnGraph from '@tshepomgaga/aws-sfn-graph';
import '@tshepomgaga/aws-sfn-graph/index.css';

console.log(file)
const aslData = file;
const App = () => {
  return (
    <div className='workflowgraph'>
    <AWSSfnGraph 
      data={aslData}
      width={1000}
      height={500}
      onError={console.log}
    />
    </div>
  )
}

export default App