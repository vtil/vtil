//

import {$setPlaceholderStrings} from 'src/mui-lib/hooks/useFetcher';

const phd = {
	initial: '请点击按钮以获取数据。',
	initializing: '加载中...',
	refreshing: '刷新中...',
	empty: '当前条件下数据为空!',
	succeeded: '当前条件下的数据为空!',
	failed: '获取数据失败，请联系管理员!',
};

export const initFetcherLib = () => $setPlaceholderStrings(phd);
