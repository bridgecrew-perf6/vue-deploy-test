export const useUtils = () => {
	////////////////////////////////////////////////
	//Null 체크
	////////////////////////////////////////////////
	function fncIsNull(str: any) {
		if (str === undefined || str === '' || str === 'null') {
			return true
		}
		return false
	}

	////////////////////////////////////////////////
	// 공백 체크
	////////////////////////////////////////////////
	function fncSpaceCheck(str: any) {
		if (str.search(/\s/) !== -1) {
			return true
		} else {
			return false
		}
	}

	////---------------------------------------------------------------------------------
	////	Function	: 숫자에 컴마 제거
	////	Description :
	////---------------------------------------------------------------------------------
	function fncUnComma(str: any) {
		str = String(str)
		return str.replace(/[^\d]+/g, '')
	}

	////////////////////////////////////////////////
	//금액에 컴마 추가
	////////////////////////////////////////////////
	function fncMoneyFormat(str: any) {
		if (fncIsNull(str)) return '0'

		str = str + ''
		return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	////////////////////////////////////////////////
	//줄바꿈 배열처리
	////////////////////////////////////////////////

	function fncRnArr(str: any) {
		if (fncIsNull(str)) return
		return str.split('\r\n')
	}

	///////////////////////////////////////
	//전화번호 형식 변환 010-0000-0000
	//////////////////////////////////////
	function fncTelFormat(str: any) {
		str = str.replace(/[^0-9]/g, '')
		let tmp = ''

		if (str.substring(0, 2) === 2) {
			// 서울 전화번호일 경우 10자리까지만 나타나고 그 이상의 자리수는 자동삭제
			if (str.length < 3) {
				return str
			} else if (str.length < 6) {
				tmp += str.substr(0, 2)
				tmp += '-'
				tmp += str.substr(2)
				return tmp
			} else if (str.length < 10) {
				tmp += str.substr(0, 2)
				tmp += '-'
				tmp += str.substr(2, 3)
				tmp += '-'
				tmp += str.substr(5)
				return tmp
			} else {
				tmp += str.substr(0, 2)
				tmp += '-'
				tmp += str.substr(2, 4)
				tmp += '-'
				tmp += str.substr(6, 4)
				return tmp
			}
		} else {
			// 핸드폰 및 다른 지역 전화번호 일 경우
			if (str.length < 4) {
				return str
			} else if (str.length < 7) {
				tmp += str.substr(0, 3)
				tmp += '-'
				tmp += str.substr(3)
				return tmp
			} else if (str.length < 11) {
				tmp += str.substr(0, 3)
				tmp += '-'
				tmp += str.substr(3, 3)
				tmp += '-'
				tmp += str.substr(6)
				return tmp
			} else {
				tmp += str.substr(0, 3)
				tmp += '-'
				tmp += str.substr(3, 4)
				tmp += '-'
				tmp += str.substr(7)
				return tmp
			}
		}
	}

	///////////////////////////////////////
	//시간 형식 변경 00:00 - 00:00
	//////////////////////////////////////
	function fncTimeFormat(str: any) {
		str = str.replace(/[^0-9]/g, '')
		let tmp = ''

		tmp += str.substr(0, 2)
		tmp += ':'
		tmp += str.substr(2, 2)
		tmp += ' ~ '
		tmp += str.substr(4, 2)
		tmp += ':'
		tmp += str.substr(6, 2)

		return tmp
	}

	///////////////////////////////////////
	//할인율 구하기
	//////////////////////////////////////
	function fncDiscount(str: any, str2: any) {
		if (fncIsNull(str)) return '0'
		let tmp = 0

		tmp = (1 - str2 / str) * 100

		console.log(Math.ceil(tmp))

		return Math.round(tmp)
	}

	return {
		fncIsNull,
		fncSpaceCheck,
		fncUnComma,
		fncMoneyFormat,
		fncRnArr,
		fncTelFormat,
		fncTimeFormat,
		fncDiscount,
	}
}
