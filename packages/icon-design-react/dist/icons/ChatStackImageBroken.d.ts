import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackImageBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackImageBroken: ForwardRefExoticComponent<ChatStackImageBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackImageBroken;
export { ChatStackImageBroken };
