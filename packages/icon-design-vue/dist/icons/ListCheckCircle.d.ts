import type { DefineComponent } from 'vue';

export interface ListCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListCheckCircle: DefineComponent<ListCheckCircleProps>;

export default ListCheckCircle;
export { ListCheckCircle };
