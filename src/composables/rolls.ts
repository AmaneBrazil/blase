import { RollOption } from 'src/components/models';
import { computed, ref } from 'vue';

const whiteRoll: RollOption = {
    value: 0,
    color: 'white',
    icon: 'test',
};

const options: RollOption[] = [
    {
        value: 1,
        color: 'red',
    },
    {
        value: 14,
        color: 'grey',
    },
    {
        value: 2,
        color: 'red',
    },
    {
        value: 13,
        color: 'grey',
    },
    {
        value: 3,
        color: 'red',
    },
    {
        value: 12,
        color: 'grey',
    },
    {
        value: 4,
        color: 'red',
    },
    {
        value: 11,
        color: 'grey',
    },
    {
        value: 5,
        color: 'red',
    },
    {
        value: 10,
        color: 'grey',
    },
    {
        value: 6,
        color: 'red',
    },
    {
        value: 9,
        color: 'grey',
    },
    {
        value: 7,
        color: 'red',
    },
    {
        value: 8,
        color: 'grey',
    },
];

const actualOptions = ref<RollOption[]>(options);

const history = ref<RollOption[]>([]);
const lastRolls = computed<RollOption[]>(() => {
    return history.value.slice(Math.max(history.value.length - 15, 0));
});

const remainTime = ref<number>(0);
const rollResult = ref<number | null>(null);

const remainTimeToStr = computed<string>(() => {
    if (remainTime.value <= 0) {
        return '';
    }

    const secs = Math.floor(remainTime.value / 100);
    const milis = remainTime.value % 100;

    return `${secs}:${milis.toString().padStart(2, '0')}`;
});

const progress = ref<number>(1);

const implementWhiteBlock = () => {
    actualOptions.value = [...options];
    const randomSlot = Math.floor(Math.random() * actualOptions.value.length);

    actualOptions.value.splice(randomSlot, 0, whiteRoll);
};

const roll = () => {
    implementWhiteBlock();

    rollResult.value = Math.floor(Math.random() * 14);
    history.value.push(
        actualOptions.value.find((o) => o.value === rollResult.value)!
    );

    setTimeout(() => {
        rollResult.value = null;
        waitRoll();
    }, 3000);
};
const waitRoll = () => {
    remainTime.value = 1599;

    let interval: NodeJS.Timeout | null = null;

    interval = setInterval(() => {
        if (remainTime.value === 0 && interval) {
            clearInterval(interval);
            progress.value = 1;
            roll();
            return;
        }

        if (remainTime.value % 30 == 0) {
            progress.value = remainTime.value / 1800 - 0.12;
        }

        remainTime.value -= 1;
    }, 10);
};

export default {
    history,
    lastRolls,
    remainTimeToStr,
    progress,
    rollResult,
    actualOptions,
    waitRoll,
};
