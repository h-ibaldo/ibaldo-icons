import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleCornerWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleCornerWide: ForwardRefExoticComponent<ChatCheckDoubleCornerWideProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleCornerWide;
export { ChatCheckDoubleCornerWide };
