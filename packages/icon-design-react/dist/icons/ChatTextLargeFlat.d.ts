import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextLargeFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextLargeFlat: ForwardRefExoticComponent<ChatTextLargeFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatTextLargeFlat;
export { ChatTextLargeFlat };
