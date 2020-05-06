import React, {useState} from 'react';
import styles from './box-1.less';
import {Button} from 'antd';

const id = 'J_box-1-stage';

const onClick = (direction, cb) => {
  let val = '';

  const node = document.getElementById(id);
  const transform = node.style.transform || '';

  const obj = {};
  transform.replace(/rotate([XYZ])\((-?\d+)deg\)/g, (s, $1, $2) => {
    obj[$1.toLowerCase()] = +$2;
  });

  console.log('================');
  console.log('obj', obj);

  switch (direction) {
    case 'up':
      val = `rotateX(${obj.x + 90}deg) rotateY(${obj.y}deg) rotateZ(${obj.z}deg)`;
    break;
    case 'down':
      val = `rotateX(${obj.x - 90}deg) rotateY(${obj.y}deg) rotateZ(${obj.z}deg)`;
    break;
    case 'left':
      val = `rotateX(${obj.x}deg) rotateY(${obj.y}deg) rotateZ(${obj.z + 90}deg)`;
    break;
    case 'right':
      val = `rotateX(${obj.x}deg) rotateY(${obj.y}deg) rotateZ(${obj.z - 90}deg)`;
    break;
    case 'inner':
      val = `rotateX(${obj.x}deg) rotateY(${obj.y + 90}deg) rotateZ(${obj.z}deg)`;
    break;
    case 'outer':
      val = `rotateX(${obj.x}deg) rotateY(${obj.y - 90}deg) rotateZ(${obj.z}deg)`;
    break;
  }

  console.log('val', val);

  cb({ transform: val });
};

export default () => {
  const [stageStyle, setStageStyle] = useState({
    transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
  });

  const up = () => onClick('up', setStageStyle);
  const down = () => onClick('down', setStageStyle);
  const left = () => onClick('left', setStageStyle);
  const right = () => onClick('right', setStageStyle);
  const inner = () => onClick('inner', setStageStyle);
  const outer = () => onClick('outer', setStageStyle);

  return (
    <div className={styles.container}>
      <div>
        <div style={{ position: 'fixed', left: 100, top: 100 }}>
          <Button onClick={up}>向上</Button>
          <div style={{ height: 16 }} />
          <Button onClick={down}>向下</Button>
          <div style={{ height: 16 }} />
          <Button onClick={left}>向左</Button>
          <div style={{ height: 16 }} />
          <Button onClick={right}>向右</Button>
          <div style={{ height: 16 }} />
          <Button onClick={inner}>向里</Button>
          <div style={{ height: 16 }} />
          <Button onClick={outer}>向外</Button>
          <div style={{ height: 16 }} />
        </div>
        <div className={styles.light}>
          <div className={styles.stage} style={stageStyle} id={id}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
