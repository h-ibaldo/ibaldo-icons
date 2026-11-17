import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXBroken: ForwardRefExoticComponent<ChatStackXBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXBroken;
export { ChatStackXBroken };
