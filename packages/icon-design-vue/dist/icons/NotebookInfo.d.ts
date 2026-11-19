import type { DefineComponent } from 'vue';

export interface NotebookInfoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotebookInfo: DefineComponent<NotebookInfoProps>;

export default NotebookInfo;
export { NotebookInfo };
