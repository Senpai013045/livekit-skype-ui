import {combineClassName} from '../../utils/combineClassName';
import styles from './grid.module.css';

export interface GridProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}
export const Grid = ({children, className, ...props}: GridProps) => {
  return (
    <div className={combineClassName(styles.grid, className)} {...props}>
      {children}
    </div>
  );
};
