import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextRaysFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextRaysFlat: ForwardRefExoticComponent<ChatTextRaysFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatTextRaysFlat;
export { ChatTextRaysFlat };
