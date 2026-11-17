import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextFlat: ForwardRefExoticComponent<ChatTextFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatTextFlat;
export { ChatTextFlat };
