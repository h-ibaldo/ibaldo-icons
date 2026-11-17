import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicNoteHookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicNoteHook: ForwardRefExoticComponent<MusicNoteHookProps & RefAttributes<SVGSVGElement>>;

export default MusicNoteHook;
export { MusicNoteHook };
