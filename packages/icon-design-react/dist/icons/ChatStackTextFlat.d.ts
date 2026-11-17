import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTextFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTextFlat: ForwardRefExoticComponent<ChatStackTextFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTextFlat;
export { ChatStackTextFlat };
