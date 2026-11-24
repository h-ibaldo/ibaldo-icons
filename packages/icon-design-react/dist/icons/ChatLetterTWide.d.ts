import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLetterTWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLetterTWide: ForwardRefExoticComponent<ChatLetterTWideProps & RefAttributes<SVGSVGElement>>;

export default ChatLetterTWide;
export { ChatLetterTWide };
