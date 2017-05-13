
/**
 * 1. 挂在 window 上的暴露的对象 必然是 '[object Object]'
 * 2. 该对象是一系列的方法的集合 必然所有的值 'typeof' 都为 'function'
 * 3. 该方法必须接收参数且仅为一个
 * 4. 该方法的源码应该包含 关键字 'volume' 且应为赋值操作 'volume='
 * 5. 该方法的源码应该包含 关键字 'setVolume'
 * 6. 匹配成功后 获取的方法名 写到 rollup 的配置文件中 并且在打包后 注入代码 
 */

Object.prototype[Symbol.iterator] = function* () {
    for (let key of Object.keys(this)) {
        yield([ key, this[key] ]);
    }
};
for (let [key, value] of window) {
    if (Object.prototype.toString.call(value) == '[object Object]') {
        for (let [method, foo] of value) {
            if (typeof foo == 'function' && foo.length == 1) {
                let content = foo.toString();
                if (content.indexOf('volume=') > -1 && content.indexOf('setVolume') > -1) {
                    console.log(`${ key }.${ method }`, foo);
                }
            }
        }
    }
};
