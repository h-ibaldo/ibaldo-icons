import type { DefineComponent } from 'vue';

export interface InfoScriptProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const InfoScript: DefineComponent<InfoScriptProps>;

export default InfoScript;
export { InfoScript };
