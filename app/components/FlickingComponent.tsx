'use client';
import Flicking from '@egjs/react-flicking';
import { FrameGrid } from '@egjs/react-grid';

export default function FlickingComponent() {
  return (
    <Flicking circular={true}>
      <div className='grid-panel'>1</div>
      <FrameGrid className='grid-panel'>
        <div className='has-background-warning has-text-dark'>2</div>
        <div className='has-background-danger has-text-white'>3</div>
        <div className='has-background-info has-text-white'>4</div>
        <div className='has-background-success has-text-white'>5</div>
        <div className='has-background-grey has-text-white'>6</div>
      </FrameGrid>
      <div className='grid-panel'>7</div>
      <FrameGrid className='grid-panel'>
        <div className='has-background-light has-text-dark '>8</div>
        <div className='has-background-grey has-text-white'>9</div>
        <div className='has-background-info has-text-white'>10</div>
        <div className='has-background-success has-text-white'>11</div>
        <div className='has-background-warning has-text-dark'>12</div>
        <div className='has-background-danger has-text-white'>13</div>
      </FrameGrid>
    </Flicking>
  );
}
