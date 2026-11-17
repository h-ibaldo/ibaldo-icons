import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackFlat: ForwardRefExoticComponent<ChatStackFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatStackFlat;
export { ChatStackFlat };
