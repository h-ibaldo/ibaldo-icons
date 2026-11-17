import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatVideoBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatVideoBroken: ForwardRefExoticComponent<ChatVideoBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatVideoBroken;
export { ChatVideoBroken };
