interface IntersectionObserverInit {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

//root: target의 가시성을 확인할 때 사용되는 상위 속성 이름
//- null 입력 시, 기본값으로 브라우저의 Viewprot가 설정됨.

//rootMargin: root에 마진값을 주어 범위를 확장 가능
//- 기본값은 0px 0px 0px 0px이며, 반드시 단위 입력 필요

//threshold: 콜백이 실행되기 위해 target의 가시성이 얼마나 필요한지 백분율로 표시
// - 기본값은 배열 [0] 이며, Number 타입의 단일 값으로도 작성 가능

export default IntersectionObserverInit;