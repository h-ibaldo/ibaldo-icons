import type { DefineComponent } from 'vue';

export interface CodeSlashSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeSlashSmall: DefineComponent<CodeSlashSmallProps>;

export default CodeSlashSmall;
export { CodeSlashSmall };
