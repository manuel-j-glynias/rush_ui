

export const get_number_as_two_digit_string = (n: Number): string => {
    let s: string = n.toString()
    if (s.length === 1) {
        s = '0' + s
    }
    return s
}
export const get_unique_graph_id = (tag:string): string => {
    const now: Date = new Date();
    // getMonth is zero based so add 1!
    let dateTimeString: string = now.getFullYear().toString() +  get_number_as_two_digit_string(1+now.getMonth()) +
        get_number_as_two_digit_string(now.getDate()) + get_number_as_two_digit_string(now.getHours()) +
        get_number_as_two_digit_string(now.getMinutes()) + get_number_as_two_digit_string(now.getSeconds()) + get_number_as_two_digit_string(now.getMilliseconds());
    let graph_id = tag + dateTimeString;
    return graph_id
}


export const now_as_string = (): string => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let pm = 'AM'
    let h = date_ob.getHours()
    if (h > 12) {
        h = h - 12;
        pm = 'PM'
    }
    let hour = ("0" + (h)).slice(-2);
    let minutes = ("0" + (date_ob.getMinutes() + 1)).slice(-2);

    let n_str = month + '-' + date + '-' + year + ' ' + hour + ':' + minutes + ' ' + pm
    return n_str;
}

export const now_date_as_string = (): string => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();

    let n_str = month + '-' + date + '-' + year
    return n_str;
}
