'use client';
import Flicking from '@egjs/react-flicking';
import GridComponent from './GridComponent';

export default function FlickingComponent() {
  return (
    <Flicking circular={true}>
      <div className='grid-panel'>1</div>
      <div className='grid-box'>
        <GridComponent />
      </div>

      {/* <FrameGrid className='grid-panel'>
        <div className='has-background-warning has-text-dark'>2</div>
        <div className='has-background-danger has-text-white'>3</div>
        <div className='has-background-info has-text-white'>4</div>
        <div className='has-background-success has-text-white'>5</div>
        <div className='has-background-grey has-text-white'>6</div>
      </FrameGrid> */}
    </Flicking>
  );
}
