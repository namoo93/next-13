'use client';
import { FrameGrid } from '@egjs/react-grid';

export default function GridComponent() {
  return (
    <FrameGrid
      className='container'
      gap={5}
      defaultDirection={'end'}
      frame={[
        [1, 1, 2, 2],
        [3, 3, 2, 2],
        [4, 4, 4, 5],
      ]}
      rectSize={100} //전체 박스 높이
      useFrameFill={true}>
      <div className={'item'}>1</div>
      <div className={'item'}>2</div>
      <div className={'item'}>3</div>
      <div className={'item'}>4</div>
      <div className={'item'}>5</div>
      <div className={'item'}>6</div>
      <div className={'item'}>7</div>
      <div className={'item'}>8</div>
      <div className={'item'}>9</div>
      <div className={'item'}>10</div>
    </FrameGrid>
  );
}
