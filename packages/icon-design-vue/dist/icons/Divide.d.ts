import type { DefineComponent } from 'vue';

export interface DivideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Divide: DefineComponent<DivideProps>;

export default Divide;
export { Divide };
