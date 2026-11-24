import type { DefineComponent } from 'vue';

export interface NotebookDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotebookDetached: DefineComponent<NotebookDetachedProps>;

export default NotebookDetached;
export { NotebookDetached };
