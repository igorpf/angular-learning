export function updateInputDispatchingEvent(element, newValue) {
    element.value = newValue;
    element.dispatchEvent(new Event('input'));
}