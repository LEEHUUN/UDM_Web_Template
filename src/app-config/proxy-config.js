/**
 * 프로젝트 proxy 설정
 * * ASP.NET Backend의 각 Controller를 하나의 proxy로 선언
 * ex) ['/ControllerName1', '/ControllerName2', '/ControllerName3', ...]
 */
export const Proxies = [];

/**
 * 샘플 페이지 리스트
 */
export const sampleProxies = ['Page1'];

/**
 * 연결할 Backend Server Binding
 * @param targetURL IIS에 설정된 Backend의 ServerIP/Port 
 */
export const targetURL = 'http://localhost:34300';

/**
 *@param DebuggingTargetURL  ASP.NET Debugging Default URL
 */
export const DebuggingTargetURL = 'http://localhost:34300';
