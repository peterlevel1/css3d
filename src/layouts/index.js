import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.basicLayout}>
      {props.children}
    </div>
  );
}

export default BasicLayout;
