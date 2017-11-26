import moment from 'moment';
var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (date, format) {
        return moment(date.getTime()).format(format);
    };
    return DateFormatter;
}());
export { DateFormatter };
//# sourceMappingURL=date-formatter.js.map