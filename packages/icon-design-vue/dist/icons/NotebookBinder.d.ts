import type { DefineComponent } from 'vue';

export interface NotebookBinderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotebookBinder: DefineComponent<NotebookBinderProps>;

export default NotebookBinder;
export { NotebookBinder };
