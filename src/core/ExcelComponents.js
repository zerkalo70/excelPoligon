import {DomListener} from "@core/DomListener";

export class ExcelComponents extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ' '
        this.emitter = options.emitter
        this.unsubscribers = []

        this.prepare()
    }
// Настраивает компонент до init
    prepare() {}
    //Возвращает шаблон компонента
    toHTML() {
        return ' '
    }
// Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }
// Подписывает на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }
    // Инициализируем компонент
    //Добавляет DOM слушателей
    init() {
        this.initDOMListeners()
    }
    // Удаляет компонент
    // Чистит слушателей
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach((unsub) => unsub())
    }
}