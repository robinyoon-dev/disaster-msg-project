# 전국 재난 톡
이 웹사이트에서는 전국 각 지역에서 발송된 재난 메시지를 볼 수 있습니다.  
🔗[업데이트 노트](https://robinyoondev.notion.site/8a0f10e1f24a4bd2aaf423083c498d08?v=225b7ff0a5dd4f80b4300165fcec80de&pvs=4)

- PC 버전
  
![전국재난톡 - 스켈레톤](https://github.com/robinyoon-dev/disaster-msg-project/assets/107087958/8d71061d-4908-4793-8ae4-410766540190)


- 모바일 버전
  
![전국재난톡3_모바일](https://github.com/robinyoon-dev/disaster-msg-project/assets/107087958/4f5ff6e1-9134-46b5-821e-b3277e3604b2)


# 기본 정보
- 제작 기간: 2023.09.09 ~ 2023.09.15
- 제작 인원: 1명
- 기술 스택: Next.js 13, TypeScript, Tailwind CSS, React.js.


# 개발 취지
저는 우리나라의 재난과 관련된 언론 보도가 수도권 편향적이라는 점을 인지하게 되었습니다. 이런 언론 보도로 인해, 전국에서는 다양한 재난 사건이 발생함에도, 사람들은 주로 수도권에서 발생한 사건·사고에만 주목하는 경향이 있습니다.

그래서 '전국 재난 톡'을 통해 전국 각 지역에서 발송된 재난 메시지를 보여줌으로써, 지방에서도 다양한 재난 사건과 사고가 발생하고 있다는 사실을 알리고 싶었습니다.

또한, '전국 재난 톡'은 실종자 정보 열람을 타지역 사람들에게도 가능하게 함으로써, 정보 공유와 협력 촉진의 장으로 활용하게 만들고 싶었습니다.

# 이 프로젝트의 목표

다음 4가지를 중점에 두고 프로젝트에 임했습니다.

1. TypeScript + Next.js 프로젝트 생성하기
2. OPEN API 사용하기
3. Tailwind CSS 사용하기
4. 무한 스크롤 구현하기

## 1. TypeScript + Next.js 프로젝트 생성하기

지금까지 저에겐 TypeScript를 사용할 수 있다는 것을 증명할 수 있는 프로젝트가 없었습니다. 이번 프로젝트에서는 이력서에 기술된 내용을 증명하기 위하여 이처럼 기술을 택했습니다.

## 2. OPEN API 사용하기

이번 프로젝트에서 공공데이터포털로부터 데이터를 성공적으로 가져오는 것이 저의 목표였습니다.


## 3. Tailwind CSS 사용하기

지금까지는 CSS module을 사용해왔습니다.  그러나 CSS module을 사용하면 파일 수가 많아지고, 스타일 변경 시 매번 파일을 이동해야 하는 번거로움이 있습니다.

그래서 이런 단점을 보완하는 Tailwind CSS를 프로젝트를 통해 연습해 봤습니다.

### Tailwind CSS를 활용하여 이런 것도 구현해봤습니다.

- 반응형 웹
  
  ![전국재난톡_2반응형](https://github.com/robinyoon-dev/disaster-msg-project/assets/107087958/12dc2af5-c919-414e-abb0-54f26e5e3f05)

- 다크 모드
  
  ![스크린샷 2023-09-15 125558](https://github.com/robinyoon-dev/disaster-msg-project/assets/107087958/36ce260f-b603-4485-8694-a97e50ae4f0a)

## 4. 무한 스크롤 구현하기
![전국재난톡1](https://github.com/robinyoon-dev/disaster-msg-project/assets/107087958/8d8f34e4-bcb0-4fc9-9386-f54007108152)

이번 프로젝트를 통해 무한 스크롤을 구현하여 원리와 방법을 익혔습니다.
또한 이 과정에서 Next.js 13의 새 기능인 ‘server action’을 알게 되었습니다.

# 앞으로의 계획

- [x] 1. 웹 서버에서 발생한 에러 고치기.
- [ ] 2. 새로운 정보가 들어왔을 때, 유저가 새로고침을 하지 않고도 새로운 정보를 볼 수 있도록 구현하기.
- [x] 3. 실종인 경우 메시지 클릭 시 상세 페이지 이동할 수 있도록 구현하기.
  ![전국재난톡_실종](https://github.com/robinyoon-dev/disaster-msg-project/assets/107087958/1e682fe0-e5ff-4d64-a605-979648c99896)

      
- [x] 4. 스켈레톤 UI 추가. 
  ![전국재난톡 - 스켈레톤](https://github.com/robinyoon-dev/disaster-msg-project/assets/107087958/d469f6bd-c859-441f-956b-0a052706021e)
