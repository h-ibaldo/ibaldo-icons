import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatRaysFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatRaysFlat: ForwardRefExoticComponent<ChatRaysFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatRaysFlat;
export { ChatRaysFlat };
